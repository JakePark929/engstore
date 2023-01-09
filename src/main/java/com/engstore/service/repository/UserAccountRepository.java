package com.engstore.service.repository;

import com.engstore.domain.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {
    UserAccount findByEmail(String username);
    UserAccount findByNameAndBirthAndPhone1(String name, String birth, String phone1);
    UserAccount findByEmailAndNameAndBirthAndPhone1(String email, String name, String birth, String phone1);
}
