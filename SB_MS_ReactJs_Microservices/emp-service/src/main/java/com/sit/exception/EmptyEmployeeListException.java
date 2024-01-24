package com.sit.exception;

public class EmptyEmployeeListException extends RuntimeException {
	private String message;

	public EmptyEmployeeListException(String message) {
		super(message);
	}

}
