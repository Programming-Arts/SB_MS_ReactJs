package com.sit.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sit.beans.EmployeeEPFInfo;

@Repository
public interface EpfRepo extends JpaRepository<EmployeeEPFInfo, Integer> {

}
