package com.alumnihub.AlumniHub.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "AlumniDetails")
@Getter
@Setter
public class Alumni {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer alumnId;

    @OneToOne
    @JoinColumn(name = "userId", nullable = false)
    private User user;

    private String phone;
    private String address;
    private String linkedInProfile;
    private String currentCompany;
    private String designation;
    private String location;

    // Getters, setters, and constructors
}
