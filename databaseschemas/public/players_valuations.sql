create table players_valuations
(
    index                               bigint not null
        primary key,
    player_id                           bigint
        references players
        constraint players_valuations_player_id_fkey1
            references players,
    last_season                         bigint,
    datetime                            text,
    date                                text,
    dateweek                            text,
    market_value_in_eur                 bigint,
    n                                   bigint,
    current_club_id                     bigint,
    player_club_domestic_competition_id text
);

alter table players_valuations
    owner to postgres;

create index ix_players_valuations_index
    on players_valuations (index);

