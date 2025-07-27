"""
Analytics module for portfolio data processing and insights
"""
import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import json
from typing import Dict, List, Any

class PortfolioAnalytics:
    def __init__(self):
        self.portfolio_data = None
        
    def load_portfolio_data(self, data: Dict[str, Any]):
        """Load portfolio data for analysis"""
        self.portfolio_data = data
        
    def calculate_experience_metrics(self) -> Dict[str, Any]:
        """Calculate experience-related metrics"""
        if not self.portfolio_data:
            return {}
            
        experience = self.portfolio_data.get('experience', [])
        
        # Calculate total years of experience
        total_years = 0
        current_role = None
        
        for exp in experience:
            if exp.get('current'):
                current_role = exp
                # For current role, calculate from start date to now
                start_date = datetime.strptime(exp['duration'].split(' - ')[0], '%B %Y')
                years = (datetime.now() - start_date).days / 365.25
                total_years += years
            else:
                # Parse duration for completed roles
                duration = exp['duration']
                if ' - ' in duration:
                    start_str, end_str = duration.split(' - ')
                    try:
                        start_date = datetime.strptime(start_str, '%B %Y')
                        end_date = datetime.strptime(end_str, '%B %Y')
                        years = (end_date - start_date).days / 365.25
                        total_years += years
                    except ValueError:
                        continue
        
        # Calculate career progression metrics
        progression_roles = []
        for exp in experience:
            if exp.get('progression'):
                progression_roles = exp['progression']
                break
        
        metrics = {
            'total_years': round(total_years, 1),
            'current_role': current_role,
            'total_roles': len(experience),
            'progression_count': len(progression_roles) if progression_roles else 0,
            'career_growth_rate': self._calculate_growth_rate(progression_roles)
        }
        
        return metrics
    
    def _calculate_growth_rate(self, progression_roles: List[Dict]) -> float:
        """Calculate career growth rate based on promotions"""
        if not progression_roles or len(progression_roles) < 2:
            return 0.0
            
        # Calculate time between first and last role
        first_role = progression_roles[0]
        last_role = progression_roles[-1]
        
        try:
            start_date = datetime.strptime(first_role['period'].split(' - ')[0], '%b %Y')
            end_date = datetime.strptime(last_role['period'].split(' - ')[1], '%b %Y')
            total_time = (end_date - start_date).days / 365.25
            
            if total_time > 0:
                return len(progression_roles) / total_time
        except (ValueError, KeyError):
            pass
            
        return 0.0
    
    def analyze_skills_distribution(self) -> Dict[str, Any]:
        """Analyze skills distribution and proficiency"""
        if not self.portfolio_data:
            return {}
            
        skills = self.portfolio_data.get('skills', {})
        
        # Analyze core skills
        core_skills = skills.get('core', [])
        core_analysis = {
            'total_skills': len(core_skills),
            'average_proficiency': np.mean([skill.get('level', 0) for skill in core_skills]),
            'top_skills': sorted(core_skills, key=lambda x: x.get('level', 0), reverse=True)[:3],
            'skill_categories': {
                'expert': len([s for s in core_skills if s.get('level', 0) >= 90]),
                'advanced': len([s for s in core_skills if 70 <= s.get('level', 0) < 90]),
                'intermediate': len([s for s in core_skills if 50 <= s.get('level', 0) < 70]),
                'beginner': len([s for s in core_skills if s.get('level', 0) < 50])
            }
        }
        
        # Analyze languages
        languages = skills.get('languages', [])
        language_analysis = {
            'total_languages': len(languages),
            'native_languages': len([l for l in languages if 'Native' in l.get('name', '')]),
            'professional_languages': len([l for l in languages if 'Professional' in l.get('name', '')])
        }
        
        return {
            'core_skills': core_analysis,
            'languages': language_analysis,
            'certifications_count': len(skills.get('certifications', []))
        }
    
    def generate_insights(self) -> List[str]:
        """Generate insights from portfolio data"""
        insights = []
        
        if not self.portfolio_data:
            return insights
            
        # Experience insights
        experience_metrics = self.calculate_experience_metrics()
        if experience_metrics.get('total_years', 0) >= 10:
            insights.append("Senior professional with over 10 years of experience")
        
        if experience_metrics.get('progression_count', 0) >= 3:
            insights.append(f"Demonstrated career growth with {experience_metrics['progression_count']} promotions")
        
        # Skills insights
        skills_analysis = self.analyze_skills_distribution()
        core_skills = skills_analysis.get('core_skills', {})
        
        if core_skills.get('average_proficiency', 0) >= 85:
            insights.append("High proficiency across core skills")
        
        top_skills = core_skills.get('top_skills', [])
        if top_skills:
            insights.append(f"Expert in {top_skills[0].get('name', '')} with {top_skills[0].get('level', 0)}% proficiency")
        
        # Language insights
        language_analysis = skills_analysis.get('languages', {})
        if language_analysis.get('total_languages', 0) >= 3:
            insights.append(f"Multilingual professional with {language_analysis['total_languages']} languages")
        
        # Certification insights
        cert_count = skills_analysis.get('certifications_count', 0)
        if cert_count >= 3:
            insights.append(f"Highly certified with {cert_count} professional certifications")
        
        return insights
    
    def create_performance_summary(self) -> Dict[str, Any]:
        """Create a comprehensive performance summary"""
        if not self.portfolio_data:
            return {}
            
        experience_metrics = self.calculate_experience_metrics()
        skills_analysis = self.analyze_skills_distribution()
        insights = self.generate_insights()
        
        summary = {
            'experience_summary': {
                'years': experience_metrics.get('total_years', 0),
                'roles': experience_metrics.get('total_roles', 0),
                'promotions': experience_metrics.get('progression_count', 0),
                'growth_rate': experience_metrics.get('career_growth_rate', 0)
            },
            'skills_summary': {
                'total_skills': skills_analysis.get('core_skills', {}).get('total_skills', 0),
                'average_proficiency': skills_analysis.get('core_skills', {}).get('average_proficiency', 0),
                'languages': skills_analysis.get('languages', {}).get('total_languages', 0),
                'certifications': skills_analysis.get('certifications_count', 0)
            },
            'key_insights': insights,
            'performance_score': self._calculate_performance_score(experience_metrics, skills_analysis)
        }
        
        return summary
    
    def _calculate_performance_score(self, experience_metrics: Dict, skills_analysis: Dict) -> float:
        """Calculate overall performance score (0-100)"""
        score = 0
        
        # Experience weight (40%)
        years = experience_metrics.get('total_years', 0)
        promotions = experience_metrics.get('progression_count', 0)
        
        experience_score = min(100, (years * 5) + (promotions * 10))
        score += experience_score * 0.4
        
        # Skills weight (35%)
        avg_proficiency = skills_analysis.get('core_skills', {}).get('average_proficiency', 0)
        cert_count = skills_analysis.get('certifications_count', 0)
        
        skills_score = min(100, avg_proficiency + (cert_count * 5))
        score += skills_score * 0.35
        
        # Language weight (15%)
        languages = skills_analysis.get('languages', {}).get('total_languages', 0)
        language_score = min(100, languages * 25)
        score += language_score * 0.15
        
        # Career growth weight (10%)
        growth_rate = experience_metrics.get('career_growth_rate', 0)
        growth_score = min(100, growth_rate * 50)
        score += growth_score * 0.1
        
        return round(score, 1)

# Example usage
if __name__ == "__main__":
    # Sample portfolio data
    sample_data = {
        "experience": [
            {
                "company": "Lendingkart",
                "position": "Senior Product Manager",
                "duration": "August 2023 - Present",
                "current": True
            }
        ],
        "skills": {
            "core": [
                {"name": "Product Management", "level": 95},
                {"name": "MySQL", "level": 85},
                {"name": "Microsoft Excel", "level": 90}
            ],
            "languages": [
                {"name": "English (Full Professional)", "level": 95},
                {"name": "Hindi (Native)", "level": 100},
                {"name": "Gujarati (Native)", "level": 100}
            ],
            "certifications": [
                "Becoming an AI-First Product Leader",
                "GPT-4 Foundations: Building AI-Powered Apps"
            ]
        }
    }
    
    analytics = PortfolioAnalytics()
    analytics.load_portfolio_data(sample_data)
    
    summary = analytics.create_performance_summary()
    print("Performance Summary:")
    print(json.dumps(summary, indent=2)) 