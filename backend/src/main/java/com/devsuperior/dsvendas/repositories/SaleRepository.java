package com.devsuperior.dsvendas.repositories;

import com.devsuperior.dsvendas.dto.SalesSuccessRateDTO;
import com.devsuperior.dsvendas.dto.SalesTotalingDTO;
import com.devsuperior.dsvendas.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SaleRepository extends JpaRepository<Sale, Long> {

    String myQuery = "SELECT new com.devsuperior.dsvendas.dto.SalesTotalingDTO(obj.seller, SUM(obj.amount))"
            + " FROM Sale AS obj GROUP BY obj.seller";
    @Query(myQuery)
    List<SalesTotalingDTO> amountGroupedBySeller();

    String myQuery2 = "SELECT new com.devsuperior.dsvendas.dto.SalesSuccessRateDTO(obj.seller, SUM(obj.visited), SUM(obj.deals))"
            + " FROM Sale AS obj GROUP BY obj.seller";
    @Query(myQuery2)
    List<SalesSuccessRateDTO> successRateBySeller();
}
