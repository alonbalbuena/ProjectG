package com.projectg.projectg;

import org.springframework.data.repository.CrudRepository;
import java.util.UUID;

public interface NotesRepository extends CrudRepository<Note, UUID> {
}