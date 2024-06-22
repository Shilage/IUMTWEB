create table users
(
    user_id          bigint default nextval('users_user_id_seq'::regclass) not null
        primary key,
    first_name       varchar(255),
    last_name        varchar(255),
    country_of_birth varchar(100),
    date_of_birth    date,
    favourite_club   varchar(255),
    favourite_player varchar(255),
    email            varchar(255),
    password         varchar(255)
);

alter table users
    owner to postgres;

