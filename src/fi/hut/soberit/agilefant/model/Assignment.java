package fi.hut.soberit.agilefant.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.BatchSize;

import flexjson.JSON;

@BatchSize(size=20)
@Entity
@Table(name = "assignment")
public class Assignment implements Serializable {
    private static final long serialVersionUID = 5391104304173714927L;
    
    private int id;
    private Project project;
    private User user;
//    private AFTime deltaOverhead;

    /**
     * Deviation from project's default overhead.
     */
//    @Type(type = "af_time")
//    @JSON
//    public AFTime getDeltaOverhead() {
//        return deltaOverhead;
//    }
//
//    public void setDeltaOverhead(AFTime deltaOverhead) {
//        this.deltaOverhead = deltaOverhead;
//    }

    public Assignment() {
    }

    public Assignment(User user, Project project) {
        this.user = user;
        this.project = project;
    }

    @ManyToOne
    @JSON(include = false)
    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    @ManyToOne
    @JSON(include = false)
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JSON(include = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

}
