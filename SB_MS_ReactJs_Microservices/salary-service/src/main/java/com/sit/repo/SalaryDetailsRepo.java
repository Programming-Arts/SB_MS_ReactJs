package com.sit.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sit.bean.SalaryDetails;

@Repository
public interface SalaryDetailsRepo extends JpaRepository<SalaryDetails, Integer> {

	@Query(value = "select salary from salary_details_tab where yoe= :yoe", nativeQuery = true)
	Integer getSalaryByYoe(@Param("yoe") Long yoe);
}
