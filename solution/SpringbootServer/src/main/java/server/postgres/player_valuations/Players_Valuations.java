package server.postgres.player_valuations;

import jakarta.persistence.*;

@Entity
@Table
public class Players_Valuations {
    @Id
    @Column(name = "player_id", nullable = false, unique = true)
    private int playerId;
    @Column(name = "last_season")
    private int last_season;
    @Column(name = "datetime", columnDefinition = "TEXT")
    private String datetime;
    @Column(name = "date", columnDefinition = "TEXT")
    private String date;
    @Column(name = "dateweek", columnDefinition = "TEXT")
    private String dateweek;
    @Column(name = "market_value_in_eur")
    private Long market_value_in_eur;
    @Column(name = "n")
    private int n;
    @Column(name = "current_club_id")
    private int current_club_id;
    @Column(name = "player_club_domestic_competition_id", columnDefinition = "TEXT")
    private String player_club_domestic_competition_id;

    public Players_Valuations() {}

    public Players_Valuations(int playerId, int last_season, String datetime, String date, String dateweek, Long market_value_in_eur, int n, int current_club_id, String player_club_domestic_competition_id) {
        this.playerId = playerId;
        this.last_season = last_season;
        this.datetime = datetime;
        this.date = date;
        this.dateweek = dateweek;
        this.market_value_in_eur = market_value_in_eur;
        this.n = n;
        this.current_club_id = current_club_id;
        this.player_club_domestic_competition_id = player_club_domestic_competition_id;
    }

    public int getPlayerId() {
        return playerId;
    }

    public void setPlayerId(int playerId) {
        this.playerId = playerId;
    }

    public int getLast_season() {
        return last_season;
    }

    public void setLast_season(int last_season) {
        this.last_season = last_season;
    }

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDateweek() {
        return dateweek;
    }

    public void setDateweek(String dateweek) {
        this.dateweek = dateweek;
    }

    public Long getMarket_value_in_eur() {
        return market_value_in_eur;
    }

    public void setMarket_value_in_eur(Long market_value_in_eur) {
        this.market_value_in_eur = market_value_in_eur;
    }

    public int getN() {
        return n;
    }

    public void setN(int n) {
        this.n = n;
    }

    public int getCurrent_club_id() {
        return current_club_id;
    }

    public void setCurrent_club_id(int current_club_id) {
        this.current_club_id = current_club_id;
    }

    public String getPlayer_club_domestic_competition_id() {
        return player_club_domestic_competition_id;
    }

    public void setPlayer_club_domestic_competition_id(String player_club_domestic_competition_id) {
        this.player_club_domestic_competition_id = player_club_domestic_competition_id;
    }
}
