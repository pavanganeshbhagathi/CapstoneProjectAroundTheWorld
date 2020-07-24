package com.traveller.model;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@ToString
@DynamicUpdate
public class Places {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long placeId;

	private  String placeType;
	
	
	private String placeSubtype;
	
	
	private  String placeName;
	
	
	private String placeImageUrl;
	
	
	private  String placeSeason;

	
	private  String placeLongitude;
	
	
	private  String placeLatitude;
	
	
	private String  placeDescription;
	
	
	private double placePackage; 
	
	
	private int rating;
}
