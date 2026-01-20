package com.lms.leave.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/leaves")
public class LeaveController {

    @GetMapping
    public String getLeaves() {
        return "List of leaves";
    }

    @PostMapping
    public String applyLeave(@RequestBody Map<String, Object> leaveRequest) {
        // Logic to save leave request would go here
        return "Leave applied successfully: " + leaveRequest;
    }
}
