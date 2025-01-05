const newman = require("newman")

newman.run({
    collection: "json-collection/vian.postman_collection.json",
    environment: "json-env/vian.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})
