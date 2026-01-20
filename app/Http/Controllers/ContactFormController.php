<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactFormController extends Controller
{
    /**
     * Handle contact form submission
     */
    public function submit(Request $request)
    {
        // Validate the request
        $validated = $request->validate([
            'name' => 'required|string|min:2|max:255',
            'email' => 'required|email|max:255',
            'company' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:20',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string|min:10|max:5000',
        ]);

        try {
            // Log the contact form submission
            \Log::info('Contact form submitted', $validated);

            // Send confirmation email to user
            // Mail::send('emails.contact-confirmation', $validated, function ($message) use ($validated) {
            //     $message->to($validated['email'])
            //             ->subject('We received your message');
            // });

            // Send notification email to admin
            // Mail::send('emails.contact-notification', $validated, function ($message) {
            //     $message->to(config('mail.from.address'))
            //             ->subject('New contact form submission');
            // });

            return response()->json([
                'success' => true,
                'message' => 'Thank you for your message! We\'ll be in touch soon.',
            ]);
        } catch (\Exception $e) {
            \Log::error('Contact form error: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'An error occurred while processing your request.',
            ], 500);
        }
    }
}
