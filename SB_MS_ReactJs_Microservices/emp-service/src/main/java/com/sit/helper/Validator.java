package com.sit.helper;

import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.sit.bean.Employee;
import com.sit.bean.SalaryDetails;
import com.sit.constants.Messages;
import com.sit.exception.InvalidEmployeeDetailsException;

@Component
public class Validator {

	public void validateEmployeeDetails(Employee employeeDetails) {

		if (employeeDetails == null)
			throw new InvalidEmployeeDetailsException(Messages.EMPTY_EMPLOYEE_OBJECT);

		if (StringUtils.isEmpty(employeeDetails.getName()))
			throw new InvalidEmployeeDetailsException(Messages.EMPLOYEE_INVALID_NAME);
		if (employeeDetails.getContact() < 1000000000L)
			throw new InvalidEmployeeDetailsException(Messages.EMPLOYEE_INVLAID_CONTACT);
		if (employeeDetails.getAge() == null)
			throw new InvalidEmployeeDetailsException(Messages.EMPLOYEE_INVALID_AGE);
		if (employeeDetails.getAge() <= 0)
			throw new InvalidEmployeeDetailsException(Messages.EMPLOYEE_AGE_GREATER_THAN_ZERO);

		if (StringUtils.isEmpty(employeeDetails.getEmail()))
			throw new InvalidEmployeeDetailsException(Messages.EMPLOYEE_INVALID_EMAIL);

		if (!employeeDetails.getEmail().contains(Messages.EMAIL_TEMPLATE))
			throw new InvalidEmployeeDetailsException(Messages.EMPLOYEE_INVALID_EMAIL_TEMPLATE);
//		if (employeeDetails.getSalary() == null || employeeDetails.getSalary() <= 0)
//			throw new InvalidEmployeeDetailsException(Messages.EMPLOYEE_INVALID_SALARY);
		if (StringUtils.isEmpty(employeeDetails.getQualification()))
			throw new InvalidEmployeeDetailsException(Messages.EMPLOYEE_INVALID_QUALIFICATION);

	}
}
