package com.example.demo.domain;

import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.annotation.Resource;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by Naver on 2017. 11. 11..
 */

@Entity
@NoArgsConstructor
@Slf4j
@ToString
public class User {
//    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Id
    @Getter
    @Setter
    private long userId;

    @Getter
    @Setter
    private String name;

    @Getter
    @Setter
    private String password;

    public User(String name, String password) {
        this.name = name;
        log.info("{}", this);
    }
}
