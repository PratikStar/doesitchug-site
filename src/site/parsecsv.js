const Papa = require('papaparse');
const fs = require('fs');
const {type} = require("@testing-library/user-event/dist/type");
const {adjectives} = require("./constants");

/**
 * Parses a CSV file with specific column types
 * @param {string} filePath - Path to the CSV file
 * @returns {Promise<Array>} - Array of parsed records
 */
function parseCSVFile(filePath) {
    return new Promise((resolve, reject) => {
        const fileContent = fs.readFileSync(filePath, 'utf8');

        Papa.parse(fileContent, {
            header: true,
            skipEmptyLines: true,
            transform: (value, field) => {
                // Remove any leading/trailing whitespace
                value = value.trim();

                // Handle empty values
                if (value === '') {
                    return null;
                }

                // Transform fields based on column name
                switch (field) {
                    case 'others':
                        try {
                            // Assuming the array is stored as a JSON string
                            return JSON.parse(value);
                        } catch (e) {
                            console.warn(`Invalid array format in others column: ${value}`);
                            return [];
                        }
                    case 'reg_ts_formattted':
                        const date = new Date(value);
                        if (isNaN(date.getTime())) {
                            console.warn(`Invalid date format: ${value}`);
                            return null;
                        }
                        return date;
                    default:
                        return value; // All other fields are strings
                }
            },
            complete: (results) => {
                if (results.errors.length > 0) {
                    console.warn('Parsing errors:', results.errors);
                }

                // Validate required columns
                const requiredColumns = [
                    'clip_a',
                    'clip_b',
                    'attribute',
                    'reg_ts_formattted',
                    'answer',
                    'cust_attr',
                    'others'
                ];

                const missingColumns = requiredColumns.filter(
                    col => !results.meta.fields.includes(col)
                );

                if (missingColumns.length > 0) {
                    reject(new Error(`Missing required columns: ${missingColumns.join(', ')}`));
                    return;
                }

                resolve(results.data);
            },
            error: (error) => {
                reject(error);
            }
        });
    });
}

// Example usage
async function processCSV() {
    try {
        const data = await parseCSVFile('/Users/pratik.sutar/Documents/timbre-dataset.csv');
        // console.log('Parsed data:', data);

        console.log(typeof data);

        let adjData = {};
        // Example of accessing parsed data
        data.forEach(record => {
            if (!['clip_a', 'clip_b'].includes(record.answer)) {
                return;
            }

            if (!(record.attribute in adjData) && (adjData[record.attribute] = {})) {
                adjData[record.attribute] = [];

            }

            adjData[record.attribute].push({
                "less": record[(record.answer === 'clip_a') ? 'clip_b' : 'clip_a'],
                "more": record[record.answer]
            })

        });
        console.log(adjData)

        // Object.keys(adjData).forEach(function(adj) {
        //
        //     console.log(adj, adjData.adj);
        //
        // });

    } catch (error) {
        console.error('Error processing CSV:', error);
    }
}

processCSV();