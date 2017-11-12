package com.example.demo.web;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by Naver on 2017. 11. 11..
 */
@Controller
@Slf4j
public class HomeController {

    @GetMapping("/")
    public String home() {
        log.debug("home");
        return "index";
    }
}
