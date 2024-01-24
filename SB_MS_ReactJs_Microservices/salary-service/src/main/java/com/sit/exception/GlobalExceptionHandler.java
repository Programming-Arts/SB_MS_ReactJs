package com.sit.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(value = InvalidEmployeeDetailsException.class)
	public ResponseEntity<ErrorResponse> handleInvalidEmployeeDetailsException(InvalidEmployeeDetailsException exc) {
		ErrorResponse errorResponse = new ErrorResponse(exc.getMessage());
		return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(value = EmptyEmployeeListException.class)
	public String handleEmptyListException() {
		return null;
	}

}
