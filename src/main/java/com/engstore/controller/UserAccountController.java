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

    @GetMapping("/module/main")
    public String moduleMain() {
        return "/index.html";
    }

    @CrossOrigin
    @PostMapping("/find-mail")
    @ResponseBody
    public ResponseEntity<?> findMail(@RequestBody UserAccount userAccount) {
        System.out.println(userAccount);
        UserAccount ResUserAccount = userAccountService.findMail(userAccount);
        System.out.println(ResUserAccount);
        if (ResUserAccount != null) {
            return new ResponseEntity<>(ResUserAccount, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
    }

//    @CrossOrigin
//    @PostMapping("/find-pw")
//    @ResponseBody
//    public ResponseEntity<?> findPw(@RequestBody UserAccount userAccount) {
//        System.out.println(userAccount);
//        return new ResponseEntity<>(UserAccountService.findPw(userAccount), HttpStatus.OK);
//    }
}
