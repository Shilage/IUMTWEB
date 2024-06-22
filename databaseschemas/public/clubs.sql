create table clubs
(
    index                   bigint,
    club_id                 integer not null
        primary key,
    club_code               text,
    name                    text,
    domestic_competition_id text
        references competitions,
    total_market_value      numeric(15, 2),
    squad_size              integer,
    average_age             numeric(5, 2),
    foreigners_number       integer,
    foreigners_percentage   numeric(5, 2),
    national_team_players   integer,
    stadium_name            text,
    stadium_seats           integer,
    net_transfer_record     varchar(255),
    coach_name              varchar(255),
    last_season             integer,
    url                     text
);

alter table clubs
    owner to postgres;

create index ix_clubs_index
    on clubs (index);

