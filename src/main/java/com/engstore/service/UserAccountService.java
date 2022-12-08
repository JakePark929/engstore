package com.engstore.service;

import com.engstore.domain.UserAccount;
import com.engstore.repository.UserAccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class UserAccountService {
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
    public UserAccount findMail(UserAccount userAccount) {
        String name = userAccount.getName();
        String birth = userAccount.getBirth();
        String phone1 = userAccount.getPhone1();
        return userAccountRepository.findByNameAndBirthAndPhone1(name, birth, phone1);
    }

//    @Transactional
//    public UserAccount findPw(UserAccount userAccount) {
//
//    }

    @Transactional
    public UserAccount findByEmail(UserAccount userAccount) {
        String username = userAccount.getEmail();
        return userAccountRepository.findByEmail(username);
    }
}
