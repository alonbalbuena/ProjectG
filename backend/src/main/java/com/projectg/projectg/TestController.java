package com.projectg.projectg;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

    TestController() {
    }

    @GetMapping("/hola")
    String all() {
        return "hola";
    }
}