package com.utn.demo.services;

import org.springframework.stereotype.Service;

import com.utn.demo.dtos.InstrumentoDTO;
import com.utn.demo.modelo.Instrumento;
import com.utn.demo.repositories.InstrumentoRepository;

import java.util.*;

import javax.transaction.Transactional;

@Service
public class InstrumentoService {
	
	private final InstrumentoRepository repository;
	
	public InstrumentoService(InstrumentoRepository repository) {
		this.repository = repository;
	}
	
	//FindAll
	@Transactional
	public List<InstrumentoDTO> findAll() throws Exception{
		List<Instrumento> entidades = repository.findAll();
		List<InstrumentoDTO> dtos = new ArrayList();
		try {
			for(Instrumento i : entidades) {
				InstrumentoDTO unDto = new InstrumentoDTO();
				unDto.setId(i.getId());
				unDto.setInstrumento(i.getInstrumento());
				unDto.setMarca(i.getMarca());
				unDto.setModelo(i.getModelo());
				unDto.setPrecio(i.getPrecio());
				unDto.setCostoEnvio(i.getCostoEnvio());
				unDto.setCantidadVendida(i.getCantidadVendida());
				unDto.setImagen(i.getImagen());
				unDto.setDescripcion(i.getDescripcion());
				
				dtos.add(unDto);
			}
			return dtos;
		}catch(Exception e) {
			throw new Exception();
		}
	}
	
	//FindById
	@Transactional
	public InstrumentoDTO findById(long id) throws Exception{
		
		Optional<Instrumento> entityOptional = repository.findById(id);
		InstrumentoDTO unDto = new InstrumentoDTO();
		try {
			Instrumento i = entityOptional.get();
			unDto.setId(i.getId());
			unDto.setInstrumento(i.getInstrumento());
			unDto.setMarca(i.getMarca());
			unDto.setModelo(i.getModelo());
			unDto.setPrecio(i.getPrecio());
			unDto.setCostoEnvio(i.getCostoEnvio());
			unDto.setCantidadVendida(i.getCantidadVendida());
			unDto.setImagen(i.getImagen());
			unDto.setDescripcion(i.getDescripcion());
			return unDto;
		}catch(Exception e) {
			throw new Exception();
		}
	}
	//Save
	@Transactional
	public InstrumentoDTO save(InstrumentoDTO dto) throws Exception{
		
		Instrumento entidad = new Instrumento();
		entidad.setInstrumento(dto.getInstrumento());
		entidad.setMarca(dto.getMarca());
		entidad.setModelo(dto.getModelo());
		entidad.setPrecio(dto.getPrecio());
		entidad.setCostoEnvio(dto.getCostoEnvio());
		entidad.setCantidadVendida(dto.getCantidadVendida());
		entidad.setImagen(dto.getImagen());
		entidad.setDescripcion(dto.getDescripcion());
		try {
			
			entidad = repository.save(entidad);
			dto.setId(entidad.getId());
			
			return dto;
		}catch(Exception e) {
			throw new Exception();
		}
	}
	//Update
	@Transactional
	public InstrumentoDTO update(long id, InstrumentoDTO dto) throws Exception{
		Optional<Instrumento> entityOptional = repository.findById(id);
		try {
			Instrumento entidad = entityOptional.get();
			entidad.setId(dto.getId());
			entidad.setInstrumento(dto.getInstrumento());
			entidad.setMarca(dto.getMarca());
			entidad.setModelo(dto.getModelo());
			entidad.setPrecio(dto.getPrecio());
			entidad.setCostoEnvio(dto.getCostoEnvio());
			entidad.setCantidadVendida(dto.getCantidadVendida());
			entidad.setImagen(dto.getImagen());
			entidad.setDescripcion(dto.getDescripcion());
			repository.save(entidad);
			dto.setId(entidad.getId());
			
			return dto;
			
		}catch(Exception e) {
			throw new Exception();
		}
	}
	//Delete
	@Transactional
	public boolean delete(long id) throws Exception{
		try {
			if(repository.existsById(id)) {
				repository.deleteById(id);
				return true;
			}else {
				throw new Exception();
			}
		}catch(Exception e) {
			throw new Exception();
		}
	}
}
