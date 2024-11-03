/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8ac77p4uyfnrq9e",
    "created": "2024-11-03 20:21:57.096Z",
    "updated": "2024-11-03 20:21:57.096Z",
    "name": "team_members",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "w47dzntr",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nf0fu1gr",
        "name": "email",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8ac77p4uyfnrq9e");

  return dao.deleteCollection(collection);
})
