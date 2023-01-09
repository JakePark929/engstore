package com.engstore.config.auth;

import com.engstore.domain.UserAccount;
import com.engstore.service.repository.UserAccountRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class PrincipalDetailsService implements UserDetailsService {
    private final UserAccountRepository userAccountRepository;

    public PrincipalDetailsService(UserAccountRepository userAccountRepository) {
        this.userAccountRepository = userAccountRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        log.info("username: '{}'", username);
        UserAccount userAccountEntity = userAccountRepository.findByEmail(username);
        log.info("userAccountEntity: '{}'", userAccountEntity);
        if(userAccountEntity != null) {
            return new PrincipalDetails(userAccountEntity);
        }
        return null;
    }
}
