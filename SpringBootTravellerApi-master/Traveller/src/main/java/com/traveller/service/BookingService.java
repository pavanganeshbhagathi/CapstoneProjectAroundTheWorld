package com.traveller.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.traveller.model.Booking;

import com.traveller.repository.BookingRepository;

@Service
public class BookingService {
   @Autowired
  private BookingRepository bookingRepository;
   @Transactional
   public Booking savePlace(Booking booking) {
       return bookingRepository.save(booking);
   }
   
   @Transactional
   public List<Booking> saveBookingPlace(List<Booking> booking) {
       return bookingRepository.saveAll(booking);
   }
   
   
   public Booking getUserById(Long id) {
        return bookingRepository.findById(id).orElse(null);
    }
   public List<Booking> getBookingPlaces() {
       return bookingRepository.findAll();
   }
   

   public List<Booking> getBookingPlaceNames(String booking)
   {
   	return bookingRepository.findByBookingPlace(booking);
   }
}
