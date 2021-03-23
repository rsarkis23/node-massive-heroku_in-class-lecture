INSERT INTO item (name, size)
VALUES ($1, $2)
returning *;