package com.engstore.controller;

import com.engstore.domain.UserAccount;
import com.engstore.domain.UserPost;
import com.engstore.service.EmailSenderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@Controller
public class IndexController {
    private final EmailSenderService emailSenderService;
    private String code;

    @GetMapping("/module/main")
    public String moduleMain() {
        return "/index.html";
    }

    @CrossOrigin
    @PostMapping("/signup-auth")
    @ResponseBody
    public ResponseEntity<?> sendAuthMail(@RequestBody UserAccount userAccount) {
        System.out.println(userAccount);
        code = emailSenderService.sendEmail(userAccount);
        System.out.println("인증코드: " + code);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping("/signup-authcheck")
    @ResponseBody
    public ResponseEntity authCheck(@RequestBody UserPost post) {
        String userAuthCode = post.getAuthCode();
        System.out.println("인증코드: " + code);
        System.out.println("유저입력코드: " + userAuthCode);
        if (code.equals(userAuthCode)) {
            return new ResponseEntity(HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
