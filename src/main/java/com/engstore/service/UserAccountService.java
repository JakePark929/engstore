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
}
