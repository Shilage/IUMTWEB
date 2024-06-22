create table competitions
(
    index                bigint,
    competition_id       text not null
        primary key,
    competition_code     text,
    name                 text,
    sub_type             text,
    type                 text,
    country_id           integer,
    country_name         text,
    domestic_league_code text,
    confederation        text,
    url                  text
);

alter table competitions
    owner to postgres;

create index ix_competitions_index
    on competitions (index);

