import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CalendarDays, Mail, Send, User } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 karakters bevatten"),
  email: z.string().email("Voer een geldig emailadres in"),
  subject: z.string().min(5, "Onderwerp moet minimaal 5 karakters bevatten"),
  dateOfBirth: z.string().min(1, "Geboortedatum is verplicht"),
  message: z.string().min(10, "Bericht moet minimaal 10 karakters bevatten"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      dateOfBirth: "",
      message: "",
    },
  });

  const calculateAge = (birthDate: string): number => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const age = calculateAge(data.dateOfBirth);
      
      if (age < 18) {
        toast({
          variant: "destructive",
          title: "Leeftijdsbeperking",
          description: "Je moet minimaal 18 jaar oud zijn om een bericht te verzenden.",
        });
        setIsSubmitting(false);
        return;
      }

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Bericht verzonden!",
        description: "Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Er is iets misgegaan",
        description: "Probeer het later opnieuw of neem telefonisch contact op.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Neem contact op
            </h2>
            <p className="text-xl text-muted-foreground">
              Heeft u vragen of wilt u een offerte aanvragen? 
              Vul het formulier in en wij nemen contact met u op.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
              <Card className="border-0 shadow-glow hover:shadow-elegant transition-all duration-300 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    Direct contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="group hover:bg-muted/50 p-3 rounded-lg transition-all duration-300">
                    <h4 className="font-semibold text-foreground mb-2">Telefoon</h4>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">+31 6 17038632</p>
                  </div>
                  <div className="group hover:bg-muted/50 p-3 rounded-lg transition-all duration-300">
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">info@uranuservices.nl</p>
                  </div>
                  <div className="group hover:bg-muted/50 p-3 rounded-lg transition-all duration-300">
                    <h4 className="font-semibold text-foreground mb-2">Bereikbaarheid</h4>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">24/7, inclusief weekenden</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-glow bg-gradient-accent text-white hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="animate-float">Waarom kiezen voor Uranu Services?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      Gecertificeerde verkeersregelaars
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      24/7 bereikbaar voor noodgevallen
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      Maatwerk oplossingen
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      Vaste aanspreekpunt
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      Reserveteam stand-by
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-glow hover:shadow-elegant transition-all duration-300 bg-gradient-card animate-slide-in-right">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  Stuur ons een bericht
                </CardTitle>
                <CardDescription>
                  Alle velden zijn verplicht. Je moet minimaal 18 jaar zijn.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Naam
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Uw volledige naam" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="uw.email@voorbeeld.nl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <CalendarDays className="w-4 h-4" />
                            Geboortedatum
                          </FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Onderwerp</FormLabel>
                          <FormControl>
                            <Input placeholder="Waar gaat uw bericht over?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bericht</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Beschrijf uw verzoek in detail..." 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      variant="contact" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Bezig met verzenden..." : "Verstuur bericht"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;