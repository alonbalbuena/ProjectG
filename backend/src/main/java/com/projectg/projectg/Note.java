package com.projectg.projectg;

import org.springframework.data.annotation.Id;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.util.UUID;

@Entity
@Table()
public record Note(
		@Id UUID id,
		String title,
		String body,
		boolean readOnly) {
}