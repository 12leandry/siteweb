<?php

use App\Http\Controllers\ContactFormController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

// Main Pages
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/services', function () {
    return Inertia::render('Services');
})->name('services');

Route::get('/portfolio', function () {
    return Inertia::render('Portfolio');
})->name('portfolio');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/demander-un-devis', function () {
    return Inertia::render('DemanderDevis');
})->name('devis');

// Service Detail Pages
Route::get('/service/web-development', function () {
    return Inertia::render('ServiceDetail', ['serviceId' => 'web-development']);
})->name('service.web-development');

Route::get('/service/ecommerce', function () {
    return Inertia::render('ServiceDetail', ['serviceId' => 'ecommerce']);
})->name('service.ecommerce');

Route::get('/service/digital-marketing', function () {
    return Inertia::render('ServiceDetail', ['serviceId' => 'digital-marketing']);
})->name('service.digital-marketing');

Route::get('/service/seo', function () {
    return Inertia::render('ServiceDetail', ['serviceId' => 'seo']);
})->name('service.seo');

Route::get('/service/design', function () {
    return Inertia::render('ServiceDetail', ['serviceId' => 'design']);
})->name('service.design');

Route::get('/service/mobile-apps', function () {
    return Inertia::render('ServiceDetail', ['serviceId' => 'mobile-apps']);
})->name('service.mobile-apps');

// Contact form submission
Route::post('/api/contact', [ContactFormController::class, 'submit'])->name('contact.submit');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
