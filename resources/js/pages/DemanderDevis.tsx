import { useLanguage, useTheme } from '@/hooks/useLanguageTheme';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import NavbarMulti from '@/components/landing/NavbarMulti';
import FooterMulti from '@/components/landing/FooterMulti';

export default function DemanderDevis() {
    const { theme } = useTheme();
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        entreprise: '',
        telephone: '',
        projet: '',
        dateDemarrage: '',
        duree: '',
        typeServices: '',
        perimetre: 'Local',
        references: '',
        designMobile: false,
        couleursLogo: false,
        fichiers: [],
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: any) => {
        const { name, value, type, checked, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:
                type === 'checkbox'
                    ? checked
                    : type === 'file'
                      ? files
                      : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Handle form submission
        setTimeout(() => {
            setLoading(false);
            alert('Devis demandé avec succès!');
        }, 1000);
    };

    return (
        <>
            <NavbarMulti />
            <div className="pt-16">
                {/* Hero Section */}
                <div
                    className={`py-20 px-4 sm:px-6 lg:px-8 ${
                        theme === 'dark'
                            ? 'bg-gradient-to-r from-gray-900 to-gray-800'
                            : 'bg-gradient-to-r from-[#0063b9] to-[#26d04c]'
                    }`}
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Obtenez une estimation instantanée
                        </h1>
                        <p className="text-xl text-white/90 mb-2">
                            Demander un Devis
                        </p>
                        <p className="text-white/80">
                            Remplissez le formulaire ci-dessous pour recevoir
                            un devis personnalisé adapté à votre projet.
                        </p>
                    </div>
                </div>

                {/* Form Section */}
                <div
                    className={`py-20 px-4 sm:px-6 lg:px-8 ${
                        theme === 'dark'
                            ? 'bg-gray-900'
                            : 'bg-gray-50'
                    }`}
                >
                    <div className="max-w-3xl mx-auto">
                        <form
                            onSubmit={handleSubmit}
                            className={`${
                                theme === 'dark'
                                    ? 'bg-gray-800'
                                    : 'bg-white'
                            } rounded-lg shadow-lg p-8`}
                        >
                            {/* Row 1: Nom & Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label
                                        className={`block text-sm font-semibold mb-2 ${
                                            theme === 'dark'
                                                ? 'text-white'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        Nom *
                                    </label>
                                    <input
                                        type="text"
                                        name="nom"
                                        value={formData.nom}
                                        onChange={handleChange}
                                        required
                                        placeholder="Votre nom complet"
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#0063b9] focus:ring-2 focus:ring-[#0063b9]/20 transition-colors ${
                                            theme === 'dark'
                                                ? 'bg-gray-700 border-gray-600 text-white'
                                                : 'bg-white border-gray-300 text-gray-900'
                                        }`}
                                    />
                                </div>

                                <div>
                                    <label
                                        className={`block text-sm font-semibold mb-2 ${
                                            theme === 'dark'
                                                ? 'text-white'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        E-mail *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="votre.email@exemple.com"
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#0063b9] focus:ring-2 focus:ring-[#0063b9]/20 transition-colors ${
                                            theme === 'dark'
                                                ? 'bg-gray-700 border-gray-600 text-white'
                                                : 'bg-white border-gray-300 text-gray-900'
                                        }`}
                                    />
                                </div>
                            </div>

                            {/* Row 2: Entreprise & Téléphone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label
                                        className={`block text-sm font-semibold mb-2 ${
                                            theme === 'dark'
                                                ? 'text-white'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        Entreprise
                                    </label>
                                    <input
                                        type="text"
                                        name="entreprise"
                                        value={formData.entreprise}
                                        onChange={handleChange}
                                        placeholder="Nom de votre entreprise"
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#0063b9] focus:ring-2 focus:ring-[#0063b9]/20 transition-colors ${
                                            theme === 'dark'
                                                ? 'bg-gray-700 border-gray-600 text-white'
                                                : 'bg-white border-gray-300 text-gray-900'
                                        }`}
                                    />
                                </div>

                                <div>
                                    <label
                                        className={`block text-sm font-semibold mb-2 ${
                                            theme === 'dark'
                                                ? 'text-white'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        Téléphone
                                    </label>
                                    <input
                                        type="tel"
                                        name="telephone"
                                        value={formData.telephone}
                                        onChange={handleChange}
                                        placeholder="(+237) 6 00 00 00 00"
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#0063b9] focus:ring-2 focus:ring-[#0063b9]/20 transition-colors ${
                                            theme === 'dark'
                                                ? 'bg-gray-700 border-gray-600 text-white'
                                                : 'bg-white border-gray-300 text-gray-900'
                                        }`}
                                    />
                                </div>
                            </div>

                            {/* Project Description */}
                            <div className="mb-6">
                                <label
                                    className={`block text-sm font-semibold mb-2 ${
                                        theme === 'dark'
                                            ? 'text-white'
                                            : 'text-gray-900'
                                    }`}
                                >
                                    Décrivez votre projet *
                                </label>
                                <textarea
                                    name="projet"
                                    value={formData.projet}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Décrivez en détail votre projet, vos objectifs, vos besoins spécifiques et tout autre information pertinente..."
                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#0063b9] focus:ring-2 focus:ring-[#0063b9]/20 transition-colors resize-none ${
                                        theme === 'dark'
                                            ? 'bg-gray-700 border-gray-600 text-white'
                                            : 'bg-white border-gray-300 text-gray-900'
                                    }`}
                                />
                            </div>

                            {/* Row 3: Dates & Duration */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label
                                        className={`block text-sm font-semibold mb-2 ${
                                            theme === 'dark'
                                                ? 'text-white'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        Date de démarrage souhaitée
                                    </label>
                                    <input
                                        type="date"
                                        name="dateDemarrage"
                                        value={formData.dateDemarrage}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#0063b9] focus:ring-2 focus:ring-[#0063b9]/20 transition-colors ${
                                            theme === 'dark'
                                                ? 'bg-gray-700 border-gray-600 text-white'
                                                : 'bg-white border-gray-300 text-gray-900'
                                        }`}
                                    />
                                </div>

                                <div>
                                    <label
                                        className={`block text-sm font-semibold mb-2 ${
                                            theme === 'dark'
                                                ? 'text-white'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        Durée estimée
                                    </label>
                                    <select
                                        name="duree"
                                        value={formData.duree}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#0063b9] focus:ring-2 focus:ring-[#0063b9]/20 transition-colors ${
                                            theme === 'dark'
                                                ? 'bg-gray-700 border-gray-600 text-white'
                                                : 'bg-white border-gray-300 text-gray-900'
                                        }`}
                                    >
                                        <option value="">Choisir</option>
                                        <option value="1-2weeks">
                                            1-2 semaines
                                        </option>
                                        <option value="1month">
                                            1 mois
                                        </option>
                                        <option value="2-3months">
                                            2-3 mois
                                        </option>
                                        <option value="3-6months">
                                            3-6 mois
                                        </option>
                                        <option value="6plus-months">
                                            6+ mois
                                        </option>
                                    </select>
                                </div>
                            </div>

                            {/* Row 4: Services & Scope */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label
                                        className={`block text-sm font-semibold mb-2 ${
                                            theme === 'dark'
                                                ? 'text-white'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        Type de services
                                    </label>
                                    <select
                                        name="typeServices"
                                        value={formData.typeServices}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#0063b9] focus:ring-2 focus:ring-[#0063b9]/20 transition-colors ${
                                            theme === 'dark'
                                                ? 'bg-gray-700 border-gray-600 text-white'
                                                : 'bg-white border-gray-300 text-gray-900'
                                        }`}
                                    >
                                        <option value="">Choisir</option>
                                        <option value="web">
                                            Développement Web
                                        </option>
                                        <option value="ecommerce">
                                            E-commerce
                                        </option>
                                        <option value="marketing">
                                            Marketing Digital
                                        </option>
                                        <option value="seo">
                                            SEO & Référencement
                                        </option>
                                        <option value="design">
                                            Design UI/UX
                                        </option>
                                        <option value="mobile">
                                            Applications Mobiles
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        className={`block text-sm font-semibold mb-2 ${
                                            theme === 'dark'
                                                ? 'text-white'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        Périmètre / Fonctionnalités
                                    </label>
                                    <select
                                        name="perimetre"
                                        value={formData.perimetre}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#0063b9] focus:ring-2 focus:ring-[#0063b9]/20 transition-colors ${
                                            theme === 'dark'
                                                ? 'bg-gray-700 border-gray-600 text-white'
                                                : 'bg-white border-gray-300 text-gray-900'
                                        }`}
                                    >
                                        <option value="Local">Local</option>
                                        <option value="Régional">
                                            Régional
                                        </option>
                                        <option value="National">
                                            National
                                        </option>
                                        <option value="International">
                                            International
                                        </option>
                                    </select>
                                </div>
                            </div>

                            {/* References */}
                            <div className="mb-6">
                                <label
                                    className={`block text-sm font-semibold mb-2 ${
                                        theme === 'dark'
                                            ? 'text-white'
                                            : 'text-gray-900'
                                    }`}
                                >
                                    Exemples de référence
                                </label>
                                <textarea
                                    name="references"
                                    value={formData.references}
                                    onChange={handleChange}
                                    rows={3}
                                    placeholder="Collez les liens de site ou images séparées par des virgules, ex. https://exemple.com, https://exemple2.com, image1.png, image2.png"
                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#0063b9] focus:ring-2 focus:ring-[#0063b9]/20 transition-colors resize-none ${
                                        theme === 'dark'
                                            ? 'bg-gray-700 border-gray-600 text-white'
                                            : 'bg-white border-gray-300 text-gray-900'
                                    }`}
                                />
                            </div>

                            {/* Checkboxes */}
                            <div className="mb-6 space-y-3">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="designMobile"
                                        checked={formData.designMobile}
                                        onChange={handleChange}
                                        className="w-5 h-5"
                                    />
                                    <span
                                        className={
                                            theme === 'dark'
                                                ? 'text-white'
                                                : 'text-gray-900'
                                        }
                                    >
                                        Design adaptable au téléphone
                                    </span>
                                </label>

                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="couleursLogo"
                                        checked={formData.couleursLogo}
                                        onChange={handleChange}
                                        className="w-5 h-5"
                                    />
                                    <span
                                        className={
                                            theme === 'dark'
                                                ? 'text-white'
                                                : 'text-gray-900'
                                        }
                                    >
                                        Utiliser les couleurs du logo
                                    </span>
                                </label>
                            </div>

                            {/* File Upload */}
                            <div className="mb-8">
                                <label
                                    className={`block text-sm font-semibold mb-2 ${
                                        theme === 'dark'
                                            ? 'text-white'
                                            : 'text-gray-900'
                                    }`}
                                >
                                    Joindre des fichiers (optionnel)
                                </label>
                                <p
                                    className={`text-xs mb-3 ${
                                        theme === 'dark'
                                            ? 'text-gray-400'
                                            : 'text-gray-600'
                                    }`}
                                >
                                    Jusqu'à 5 fichiers, chacun de moins de 5
                                    Mo. Types autorisés : pdf, doc, docx, png,
                                    jpg, zip
                                </p>
                                <div
                                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                                        theme === 'dark'
                                            ? 'border-gray-600 hover:border-[#26d04c] hover:bg-gray-700/50'
                                            : 'border-gray-300 hover:border-[#26d04c] hover:bg-gray-50'
                                    }`}
                                >
                                    <input
                                        type="file"
                                        name="fichiers"
                                        onChange={handleChange}
                                        multiple
                                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip"
                                        className="hidden"
                                        id="file-input"
                                    />
                                    <label
                                        htmlFor="file-input"
                                        className="cursor-pointer"
                                    >
                                        <p
                                            className={
                                                theme === 'dark'
                                                    ? 'text-white'
                                                    : 'text-gray-900'
                                            }
                                        >
                                            Glisser-déposer les fichiers ici,
                                            ou cliquer pour sélectionner
                                        </p>
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#26d04c] text-white font-semibold py-4 px-6 rounded-lg hover:bg-[#22ba41] transition-all flex items-center justify-center gap-2 disabled:opacity-50 transform hover:scale-105"
                            >
                                {loading ? (
                                    <>
                                        <div className="animate-spin">⌛</div>
                                        Envoi en cours...
                                    </>
                                ) : (
                                    <>
                                        Envoyer la demande
                                        <ArrowRight size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <FooterMulti />
        </>
    );
}
