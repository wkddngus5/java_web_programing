package com.example.demo;

import com.example.demo.domain.User;
import org.junit.Test;

/**
 * Created by Naver on 2017. 11. 11..
 */
public class UserTests {

    @Test
    public void test() {
        User user=  new User("name", "passrod");
    }
}
