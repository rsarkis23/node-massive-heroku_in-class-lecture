CREATE TABLE item (
  item_id SERIAL PRIMARY KEY,
  name TEXT,
  size TEXT
);

INSERT INTO item (name, size)
VALUES ('ball', 'large'), ('bat', 'medium'), ('frisby', 'small');