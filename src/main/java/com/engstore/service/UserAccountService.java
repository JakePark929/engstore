package com.engstore.service;

import com.engstore.domain.UserAccount;
import com.engstore.service.repository.UserAccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Random;

@RequiredArgsConstructor
@Service
public class UserAccountService {
    private final EmailSenderService emailSenderService;
    private final UserAccountRepository userAccountRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Transactional
    public UserAccount insertUserAccount(
            UserAccount userAccount // TODO: DTO
    ) {
        userAccount.setRole("ROLE_USER");
        userAccount.setRoleUser();
        String rawPassword = userAccount.getPassword();
        String encPassword = bCryptPasswordEncoder.encode(rawPassword);
        userAccount.setPassword(encPassword);
        return userAccountRepository.save(userAccount);
    }

    @Transactional
    public UserAccount findByEmail(UserAccount userAccount) {
        String username = userAccount.getEmail();
        return userAccountRepository.findByEmail(username);
    }

    // 전화번호, 이름
    @Transactional
    public UserAccount findMail(UserAccount userAccount) {
        String name = userAccount.getName(); // 이름
        String birth = userAccount.getBirth(); // 생년월일
        String phone1 = userAccount.getPhone1(); // 전화번호
        return userAccountRepository.findByNameAndBirthAndPhone1(name, birth, phone1);
    }

    @Transactional
    public Boolean findPw(UserAccount userAccount) {
        String email = userAccount.getEmail();
        String name = userAccount.getName();
        String birth = userAccount.getBirth();
        String phone1 = userAccount.getPhone1();

        UserAccount userAccountEntity = userAccountRepository.findByEmailAndNameAndBirthAndPhone1(email, name, birth, phone1);
        if (userAccountEntity != null) {
            String rawPassword = createPwKey();
            boolean sentEmail = emailSenderService.sendEmailWithNewPassword(email, rawPassword);
            if (sentEmail) {
                System.out.println("초기화된 비밀번호: " + rawPassword);
                String encPassword = bCryptPasswordEncoder.encode(rawPassword);
                userAccountEntity.setPassword(encPassword);
                return true;
            }
        }
        return false;
    }

    private String createPwKey() {
        StringBuffer key = new StringBuffer();
        Random rnd = new Random();

        for (int i = 0; i < 8; i++) {
            int index = rnd.nextInt(3);

            if (i < 6) {
                switch (index) {
                    case 0:
                        key.append((char) ((rnd.nextInt(26)) + 97));
                        break;
                    case 1:
                        key.append((char) ((rnd.nextInt(26)) + 65));
                        break;
                    case 2:
                        key.append(rnd.nextInt(10));
                        break;
                }
            } else  {
                int arr[] = {33, 64, 35, 36};
                key.append((char) arr[(rnd.nextInt(4))]);
            }
        }

        return key.toString();
    }
}
