package com.engstore.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Timestamp;

@Getter
@ToString // TODO: lombok 위험
@Entity
public class UserAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // TODO: 세터 지양
    @Setter private String email;
    @Setter private String password;
    @Setter private String name;
    @Setter private String birth;
    @Setter private String gender;
    @Setter private String phone1;
    @Setter private String phone2;
    @Setter private String userClass;

    @Setter private String role;

    @CreationTimestamp
    private Timestamp createDate;

    public void setRoleUser() {
        this.role="ROLE_USER";
    }
}
