package com.devsuperior.dsvendas.services;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.dto.SalesSuccessRateDTO;
import com.devsuperior.dsvendas.dto.SalesTotalingDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.entities.Seller;
import com.devsuperior.dsvendas.repositories.SaleRepository;
import com.devsuperior.dsvendas.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SaleService {

    @Autowired
    private SaleRepository repository;

    @Autowired
    private SellerRepository sellerRepository;

    @Transactional(readOnly = true)
    public Page<SaleDTO> findAll(Pageable pageable) {
        getSellers();
        Page<Sale> result = repository.findAll(pageable);
        return result.map(x -> new SaleDTO(x));
    }

    @Transactional(readOnly = true)
    public List<SalesTotalingDTO> amountGroupedBySeller() {
        getSellers();
        return repository.amountGroupedBySeller();
    }

    @Transactional(readOnly = true)
    public List<SalesSuccessRateDTO> successRateBySeller() {
        getSellers();
        return repository.successRateBySeller();
    }

    // helper method
    public List<Seller> getSellers() {
      return sellerRepository.findAll();
    }

}
