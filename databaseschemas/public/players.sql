create table players
(
    index                                bigint,
    player_id                            bigint not null
        primary key,
    first_name                           text,
    last_name                            text,
    name                                 text,
    last_season                          integer,
    current_club_id                      integer
        references clubs,
    player_code                          text,
    country_of_birth                     text,
    city_of_birth                        text,
    country_of_citizenship               text,
    date_of_birth                        text,
    sub_position                         text,
    position                             text,
    foot                                 text,
    height_in_cm                         integer,
    market_value_in_eur                  numeric(15, 2),
    highest_market_value_in_eur          numeric(15, 2),
    contract_expiration_date             text,
    agent_name                           text,
    image_url                            text,
    url                                  text,
    current_club_domestic_competition_id text,
    current_club_name                    text
);

alter table players
    owner to postgres;

create index ix_players_index
    on players (index);

