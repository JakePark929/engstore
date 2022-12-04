package com.engstore.controller;

import com.engstore.domain.UserAccount;
import com.engstore.service.UserAccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@Controller
public class UserAccountController {
    private final UserAccountService userAccountService;

    @GetMapping("/user")
    @ResponseBody
    public String user() {
        return "user";
    }

    @CrossOrigin
    @PostMapping("/signup-user")
    @ResponseBody
    public ResponseEntity<?> save(@RequestBody UserAccount userAccount) {
        System.out.println(userAccount);
        return new ResponseEntity<>(userAccountService.insertUserAccount(userAccount), HttpStatus.CREATED);
    }

    @GetMapping("/module-main")
    public String moduleMain() {
        return "/index.html";
    }
}
