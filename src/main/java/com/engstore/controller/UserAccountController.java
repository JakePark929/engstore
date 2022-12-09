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
    @GetMapping("/login-error")
    @ResponseBody
    public ResponseEntity<?> loginError() {
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @CrossOrigin
    @PostMapping("/signup-user")
    @ResponseBody
    public ResponseEntity<?> save(@RequestBody UserAccount userAccount) {
        System.out.println(userAccount);
        return new ResponseEntity<>(userAccountService.insertUserAccount(userAccount), HttpStatus.CREATED);
    }

    @CrossOrigin
    @PostMapping("/check-dupl")
    @ResponseBody
    public ResponseEntity<?> checkDuplicated(@RequestBody UserAccount userAccount) {
        System.out.println(userAccount);
        UserAccount resUserAccount = userAccountService.findByEmail(userAccount);
        System.out.println(resUserAccount);
        if (resUserAccount != null) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @CrossOrigin
    @PostMapping("/find-mail")
    @ResponseBody
    public ResponseEntity<?> findMail(@RequestBody UserAccount userAccount) {
        System.out.println(userAccount);
        UserAccount resUserAccount = userAccountService.findMail(userAccount);
        System.out.println(resUserAccount);
        if (resUserAccount != null) {
            return new ResponseEntity<>(resUserAccount, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
    }

    @CrossOrigin
    @PostMapping("/find-pw")
    @ResponseBody
    public ResponseEntity<?> findPw(@RequestBody UserAccount userAccount) {
        System.out.println(userAccount);
        Boolean resetPw = userAccountService.findPw(userAccount);
        System.out.println(resetPw);
        if (resetPw) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
