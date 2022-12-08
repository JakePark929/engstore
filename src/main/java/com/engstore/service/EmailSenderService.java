package com.engstore.service;

import com.engstore.domain.UserAccount;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class EmailSenderService {
    private final JavaMailSender mailSender;

    public EmailSenderService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public String sendEmail(UserAccount userAccount) {
        String authCode = createKey();
        String subject = "엔지니어링 디지털변환 클라우드 플랫폼 인증번호 메일";
        String body = "인증번호 코드: " + authCode;
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("dxeng@wise.co.kr");
        message.setTo(userAccount.getEmail());
        message.setSubject(subject);
        message.setText(body);

        mailSender.send(message);

        System.out.println("Mail sent Successfully...");

        return authCode;
    }

    private String createKey() {
        StringBuffer key = new StringBuffer();
        Random rnd = new Random();

        for(int i = 0; i < 8; i++) {
            int index = rnd.nextInt(3);

            switch (index) {
                case 0:
                    key.append((char)((int)(rnd.nextInt(26)) + 97));
                    break;
                case 1:
                    key.append((char)((int)(rnd.nextInt(26)) + 65));
                    break;
                case 2:
                    key.append(rnd.nextInt(10));
                    break;
            }
        }
        return key.toString();
    }
}
