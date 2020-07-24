package com.traveller.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.traveller.model.Places;


@Repository
public interface PlaceRepository extends JpaRepository<Places, Long> {

	List<Places> findByPlaceName(String name);

	List<Places> findByPlaceSeason(String name);

	List<Places> findByPlaceType(String name);

	List<Places> findByPlacePackage(double price);

	List<Places> findByPlacePackageGreaterThanEqual(double price);

	List<Places> findByPlacePackageLessThanEqual(double price);

	List<Places> findByPlaceSubtype(String name);

	List<Places> findByRating(int rating);

	List<Places> findByPlacePackageBetween(double start, double end);

//	List<Places> findByPlaceTypeAndPlaceSubType(String placeType, String placeSubType);

//	List<Places> findByPlacePackageBetweenAndPlaceType(double start, double end,String name);

	List<Places> findByPlaceTypeAndPlaceSubtype(String placeType, String placeSubtype);

	List<Places> findByPlaceTypeAndPlaceSeason(String placeType, String placeSeason);

	List<Places> findByPlaceTypeAndRating(String placeType, int rating);

	List<Places> findByPlaceTypeAndPlacePackageBetween(String placeTypename, double start, double end);

}
