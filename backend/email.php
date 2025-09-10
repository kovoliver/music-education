<?php
header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"), true);

$name = trim($data["name"] ?? "");
$email = trim($data["email"] ?? "");
$subject = trim($data["subject"] ?? "");
$message = trim($data["message"] ?? "");

// Validáció
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode(["success" => false, "message" => "All fields are required."]);
    exit;
}

// Email validáció
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Invalid email address."]);
    exit;
}

// Hosszkorlátok
if (strlen($subject) > 200 || strlen($message) > 5000) {
    echo json_encode(["success" => false, "message" => "Message too long."]);
    exit;
}

$to = "composers.compass.yt@gmail.com";
$headers = "From: noreply@yourdomain.com\r\n";
$headers .= "Reply-To: " . htmlspecialchars($email) . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$body = "New message from your website:\n\n"
      . "Name: $name\n"
      . "Email: $email\n"
      . "Subject: $subject\n\n"
      . "Message:\n$message\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true, "message" => "Message sent successfully!"]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to send message."]);
}