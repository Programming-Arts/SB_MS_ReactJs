package com.sit.exception;

public class InvalidEmployeeDetailsException extends RuntimeException {
	private String message;

	public InvalidEmployeeDetailsException(String message) {
		super(message);
	}

}
