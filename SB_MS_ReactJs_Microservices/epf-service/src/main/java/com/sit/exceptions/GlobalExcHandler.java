package com.sit.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExcHandler {

	@ExceptionHandler(EpfException.class)
	public ResponseEntity<String> handleEpfException(EpfException ec) {
		return new ResponseEntity<String>(ec.getMessage(), HttpStatus.BAD_REQUEST);
	}
}
