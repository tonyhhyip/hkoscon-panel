SET timezone TO 'Asia/Hong_Kong';
CREATE EXTENSION "uuid-ossp";

CREATE TABLE events (
  event_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  event_name TEXT NOT NULL
);

CREATE INDEX ON events(event_name);

CREATE TABLE resources (
  resource_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  event_id UUID NOT NULL REFERENCES events(event_id),
  resource_name TEXT NOT NULL
);

CREATE INDEX ON resources(resource_name);

CREATE TABLE attendees (
  attendee_id CHAR(9) PRIMARY KEY,
  ticket_id CHAR(9) NOT NULL,
  ticket_type TEXT NOT NULL,
  attendee_name TEXT NOT NULL,
  event_id UUID NOT NULL REFERENCES events(event_id)
);

CREATE INDEX ON attendees(attendee_name);

CREATE TABLE attendee_resource (
  resource UUID NOT NULL REFERENCES resources(resource_id),
  attendee CHAR(9) NOT NULL REFERENCES attendees(attendee_id),
  start_time TIMESTAMP DEFAULT NULL,
  end_time TIMESTAMP DEFAULT NULL
);