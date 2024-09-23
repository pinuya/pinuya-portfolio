
CREATE TABLE projects(
id SERIAL PRIMARY KEY,
title TEXT,
description TEXT,
image TEXT,
details TEXT
);

CREATE TABLE experiences(
    id SERIAL PRIMARY KEY,
    company TEXT,
    position TEXT,
    duration TEXT,
    description TEXT
);

CREATE TABLE skills(
    id SERIAL PRIMARY KEY,
    title TEXT
);