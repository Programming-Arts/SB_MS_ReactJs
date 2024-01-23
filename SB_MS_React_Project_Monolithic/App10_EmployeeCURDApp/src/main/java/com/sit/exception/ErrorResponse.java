package com.sit.exception;

import org.springframework.stereotype.Component;

//@Component
public class ErrorResponse {
	private String message;

	public ErrorResponse(String message) {
		
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
